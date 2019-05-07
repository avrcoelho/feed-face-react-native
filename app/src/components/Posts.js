import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Posts = ({ data }) => (
  <View style={styles.posts}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.name}>{data.name}</Text>
    <Text style={styles.body}>{data.body}</Text>
  </View>
);

Posts.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;
