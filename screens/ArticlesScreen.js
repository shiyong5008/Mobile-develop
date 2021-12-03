import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DEFAULTS from "../default.json";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  FlatList,
  RefreshControl
} from 'react-native';

import {
  Placeholder,
  PlaceholderLine,
  Shine,
} from "rn-placeholder";

import { Card } from 'react-native-paper';

import * as WebBrowser from 'expo-web-browser';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function ArticlesScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [active, setActive] = useState('local');

  const currentNewsPage = 1;
  const pageSize = 15;
  const fromDate = moment().subtract(7, 'days').format('YYYY-MM-DD');

  const localUrl = `https://newsapi.org/v2/top-headlines?country=ca&q=covid&from=${fromDate}&language=en&sortBy=publishedAt&apiKey=${DEFAULTS.news.API_KEY}&pageSize=${pageSize}&page=${currentNewsPage}`;
  const worldUrl = `https://newsapi.org/v2/everything?qInTitle=covid&from=${fromDate}&language=en&sortBy=publishedAt&apiKey=${DEFAULTS.news.API_KEY}&pageSize=${pageSize}&page=${currentNewsPage}`;
  const omicronUrl = `https://newsapi.org/v2/everything?qInTitle=omicron&from=${fromDate}&language=en&sortBy=publishedAt&apiKey=${DEFAULTS.news.API_KEY}&pageSize=${pageSize}&page=${currentNewsPage}`

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const flatlistRef = useRef();

  const fetchNews = (url) => {
    setLoading(true)
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          setNews(result.articles);
          setLoading(false);
        })
        .catch(error => {
          console.log('error', error);
          setLoading(false);
        });
  }

  const showCanadaNews = () => {
    setActive('local');
    flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });
    fetchNews(localUrl);
  }

  const showWorldNews = () => {
    setActive('world');
    flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });
    fetchNews(worldUrl);
  }

  const showOmicronNews = () => {
    setActive('omicron');
    flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });
    fetchNews(omicronUrl);
  }

  const refreshNews = () => {
    switch (active) {
      case 'local':
        fetchNews(localUrl);
        break;
      case 'world':
        fetchNews(worldUrl);
        break;
      case 'omicron':
        fetchNews(omicronUrl);
        break;
    }
  }

  useEffect(() => {
    fetchNews(localUrl);
  }, []);

  const LoadingNews = () => {
    return (
        <Placeholder
            Animation={Shine}>
          <Card style={{ backgroundColor: '#fff', padding: 10, paddingBottom: 0, marginBottom: 10}} elevation={3}>
            <PlaceholderLine width={100} style={{height: 100}}/>
          </Card>

          <Card style={{ backgroundColor: '#fff', padding: 10, paddingBottom: 0, marginBottom: 10}} elevation={3}>
            <PlaceholderLine width={100} style={{height: 100}}/>
          </Card>

          <Card style={{ backgroundColor: '#fff', padding: 10, paddingBottom: 0, marginBottom: 10}} elevation={3}>
            <PlaceholderLine width={100} style={{height: 100}}/>
          </Card>

          <Card style={{ backgroundColor: '#fff', padding: 10, paddingBottom: 0, marginBottom: 10}} elevation={3}>
            <PlaceholderLine width={100} style={{height: 100}}/>
          </Card>

          <Card style={{ backgroundColor: '#fff', padding: 10, paddingBottom: 0, marginBottom: 10}} elevation={3}>
            <PlaceholderLine width={100} style={{height: 100}}/>
          </Card>
        </Placeholder>
    )
  }

  const openBrowser = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
  }
  const onRefresh = React.useCallback(async () => {
    refreshNews();
  }, [loading]);

  const Item = (item) => {
    let data = item.data;
    return(
        <TouchableOpacity onPress={()=> openBrowser(data.url)}
                          activeOpacity={0.80}>
          <Card style={{ backgroundColor: '#cfd7dd', padding: 20, marginBottom: 10}} elevation={3}>
            <Text style={styles.newsTitle}>{data.title}</Text>
            <Text style={styles.newsSubTitle}>{data.description}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
              <Text style={{color: 'gray', fontSize: 12, textAlign: 'left', }}>from {data.source.name} ({moment(data.publishedAt).format("MM-DD-YYYY")})</Text>

              <Text style={{color: '#3f5e78'}}>Read more...</Text>
            </View>
          </Card>
        </TouchableOpacity>
    )
  }
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              color={active === 'local' ? 'salmon' : 'white'}
              title="Canada"
              onPress={showCanadaNews}
          />
          <Button
              color={active === 'world' ? 'salmon' : 'white'}
              title="World"
              onPress={showWorldNews}
          />
          <Button
              color={active === 'omicron' ? 'salmon' : 'white'}
              title="Omicron"
              onPress={showOmicronNews}
          />
        </View>

        <FlatList
            ref={flatlistRef}
            data={news}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={item => {
              return item.publishedAt + item.title + item.source.name
            }}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            contentContainerStyle={styles.list}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f5e78'
  },
  buttonContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: 'center',
    paddingVertical: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "darkgray"
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
  list: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})
