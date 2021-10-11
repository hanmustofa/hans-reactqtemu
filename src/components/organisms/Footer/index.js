import React, {Component} from 'react';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import './style.css';

export default class Footer extends Component {

  render() {
    return (
      <TextGroup className="Footer">
        <hr/><br/>
        <Text content='&copy; Copyright@ Hacktiv8 2021 - Hanii mustofa'/>
        <br/>
      </TextGroup>
    )
  }
}