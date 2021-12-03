
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DEFAULTS from "../default.json";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Placeholder } from "rn-placeholder";
import { Card, Paragraph, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import * as Location from 'expo-location';
import * as WebBrowser from 'expo-web-browser';

export default function HomeScreen({navigation}) {
  const [country, setCountry] = useState({})
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [location, setLocation] = useState(null);
  const [hideInfoBox, setHideInfoBox] = useState(false)
  const [hideInfoBox2, setHideInfoBox2] = useState(false)
  const [hideInfoBox3, setHideInfoBox3] = useState(false)
  const [loading, setLoading] = useState(false)
  const [news, setNewsData] = useState([])
  const AnimationRef = useRef(null);
  const AnimationRef2 = useRef(null);
  const AnimationRef3 = useRef(null);

  const LoadingNews = () => {
    return (
      <Placeholder>
        <Card style={styles.cardStyle}></Card>
        <Card style={styles.cardStyle}></Card>
        <Card style={styles.cardStyle}></Card>
        <Card style={styles.cardStyle}></Card>
        <Card style={styles.cardStyle}></Card>
      </Placeholder>
    )
  }

  const _onPress1 = (i) => {
    switch(i){
      case 0:
        if(AnimationRef) {
          AnimationRef.current?.fadeOut();
          setTimeout(()=> {
            setHideInfoBox(true)
          },300)
        };
        break;
      case 1:
        if(AnimationRef2) {
          AnimationRef2.current?.fadeOut();
          setTimeout(()=> {
            setHideInfoBox2(true)
          },300)
        };
        break;
      case 2:
      if(AnimationRef3) {
        AnimationRef3.current?.fadeOut();
        setTimeout(()=> {
          setHideInfoBox3(true)
        },300)
      };
      break;
    }

  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let country = {};
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        country = await Location.reverseGeocodeAsync(location.coords);
        country = {
          value: country[0].country,
          code: country[0].isoCountryCode,
        }
        setLocation(location)

      } else 
      {
        country = {
          isoCountryCode: "CAN", 
          city: "Vancouver"
        }
      }
      setCountry(country)
      fetchNews(country.isoCountryCode);

    })();

    const fetchNews = (c) => {
      setLoading(true)
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const fromDate = moment().subtract(3, 'days').format('YYYY-MM-DD');
      const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=ca&q=covid&from=${fromDate}&language=en&sortBy=publishedAt&apiKey=${DEFAULTS.news.API_KEY}&pageSize=5&page=1`

      fetch(NEWS_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
          setNewsData(result.articles)
          setLoading(false)
        })
        .catch(error => {
          console.log('error', error);
          setLoading(false)
        });
    }

  }, []);

  const CloseContent = (props) => (
    <IconButton
      icon="close"
      color={props.theme == 'light' ? 'white' : 'black'}
      size={24}
      onPress={() => {
        if (props.i == 0) {
          _onPress1(0)
        } else if (props.i == 1) {
          _onPress1(1)
        } else if (props.i == 2) {
          _onPress1(2)
        }
      }}
    />
  );

  const openBrowser = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
  }

  if (country == null) {
    return (
      <View style={{padding: 20}}>
        <LoadingNews/>
      </View>
    )
  }

  return (
    <View style={styles.container}>

    <ScrollView style={{flex: 1, padding: 25,}} >

        <Text style={styles.title}>Stay Home Stay Safe</Text>
        <Text style={styles.subtitle}>Together we will survive this pandemic</Text>

        {!hideInfoBox &&
          <TouchableOpacity onPress={()=> openBrowser("https://www2.gov.bc.ca/gov/content/covid-19/vaccine/register")}
            activeOpacity={0.80}>
            <Animatable.View ref={AnimationRef}>
              <Card style={styles.box1} elevation={3}>
              <Card.Title titleStyle={{color: '#213d54', }} title="Getting Vaccinated?"
                 right={() => <CloseContent i={0} theme={'dark'}/>} />
              <Card.Content>
                <Paragraph style={{color: '#213d54', }}>Getting vaccinated is easy and safe. Spread the word and help your friends and family get vaccinated. Tap here to read more about COVID-19 vaccine.</Paragraph>
              </Card.Content>
              </Card>
            </Animatable.View>
          </TouchableOpacity>
        }

        {!hideInfoBox2 &&
          <TouchableOpacity onPress={()=> openBrowser("http://www.bccdc.ca/health-info/diseases-conditions/covid-19/about-covid-19/if-you-have-covid-19")}
            activeOpacity={0.80}>
            <Animatable.View ref={AnimationRef2}>
              <Card style={styles.box2} elevation={3}>
                <Card.Title titleStyle={{color: '#213d54', }} title="Feeling Sick?" right={()=> <CloseContent i={1} />} />
                <Card.Content>
                  <Paragraph style={{color: '#213d54', }}>If you feel sick or have tested positive for COVID-19, tap here to learn more about how to take care of yourself and self-isolate to help prevent the virus from spreading to others.</Paragraph>
                </Card.Content>
              </Card>
            </Animatable.View>
          </TouchableOpacity>
        }

        {!hideInfoBox3 &&
          <TouchableOpacity onPress={()=> openBrowser("https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/index.html")}
            activeOpacity={0.80}>
            <Animatable.View ref={AnimationRef3}>
              <Card style={styles.box3} elevation={3}>
                <Card.Title title="Planning to travel?" titleStyle={{color: '#213d54', }} right={()=> <CloseContent i={2} theme={'dark'}/>} />
                <Card.Content>
                  <Paragraph style={{color: '#213d54', }}>If you're travelling within Canada or leaving the country, make a plan to show proof of vaccination. Tap here to learn more about travel requirement.</Paragraph>
                </Card.Content>
              </Card>
            </Animatable.View>
          </TouchableOpacity>
        }

        <View style={{marginTop:20, marginBottom: 50}}>
          <Text style={styles.title}>Latest News</Text>
          {!loading && news.length !=0 ?
            <View>
              {news.map((data, index) => {
                return (
                  <TouchableOpacity key={index} onPress={()=> openBrowser(data.url)}
                    activeOpacity={0.80}>
                    <Card  style={{ backgroundColor: '#cfd7dd', padding: 20, marginBottom: 10}} elevation={3}>
                      <Text style={styles.newsTitle}>{data.title}</Text>
                      <Text style={styles.newsSubTitle}>{data.description}</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{color: 'gray', fontSize: 12, textAlign: 'left', }}>from {data.source.name} ({moment(data.publishedAt).format("MM-DD-YYYY")})</Text>

                        <Text style={{color: '#3f5e78'}}>Read more...</Text>
                      </View>

                    </Card>
                  </TouchableOpacity>
                )
              })}

            </View> :
            <View style={{marginTop: 10}}>
              <LoadingNews/>
            </View>
          }
        </View>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f5e78',
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textTransform: 'uppercase',
    marginVertical: 15
  },
  subtitle: {
    color: "#e7eff6",
    fontSize: 18,
    marginBottom: 5
  },
  box1: {
    backgroundColor: '#adcbe3', marginVertical: 15
  },
  box2: {
    backgroundColor: '#e7eff6', marginVertical: 15
  },
  box3: {
    backgroundColor: '#63ace5', marginVertical: 15
  },
  newsTitle: {
    color: '#213d54',
    fontWeight: 'bold',
    fontSize: 18,
  },
  newsSubTitle: {
    marginTop: 10,
    color: '#3f5e78',
  },
  cardStyle: { 
    backgroundColor: '#94a6b4', 
    paddingHorizontal: 10, 
    paddingTop: 10, 
    marginBottom: 20}
});
