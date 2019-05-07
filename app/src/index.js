import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Posts from './components/Posts';

import styles from './styles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Quero café',
        name: 'Diego Fernandes',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        title: 'GoNative',
        name: 'Rocketseat',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 3,
        title: 'Quero café',
        name: 'Diego Fernandes',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 4,
        title: 'GoNative',
        name: 'Rocketseat',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 5,
        title: 'Quero café',
        name: 'Diego Fernandes',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 6,
        title: 'GoNative',
        name: 'Rocketseat',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>GoNative App</Text>
        <View style={styles.scrollView}>
          <ScrollView>
            {posts && posts.map(post => <Posts key={post.id} data={post} />)}
          </ScrollView>
        </View>
      </View>
    );
  }
}
