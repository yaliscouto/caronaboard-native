import React, { Component } from 'react'
import { View } from 'react-native'
import { RkText } from 'react-native-ui-kitten'

import { Button, TextInput } from '../../shared/components'
import { saveRideRequest } from '../../../services/firebase'
import styles from './styles/RideRequestScreenStyles'

export const INITIAL_STATE = {
  origin: '',
  destination: '',
  days: '',
  hours: ''
}

export class RideRequestScreen extends Component {
  constructor (props) {
    super(props)
    this.state = INITIAL_STATE
  }

  render () {
    return (
      <View style={styles.flexible}>
        <View style={styles.container}>
          <RkText style={styles.title}>
            Ride Request
          </RkText>
          <View style={styles.inputTextsContainer}>
            <TextInput placeholder='ORIGIN' onChangeText={(origin) => this.setState({origin})} />
            <TextInput placeholder='DESTINATION' onChangeText={(destination) => this.setState({destination})} />
            <TextInput placeholder='DAYS' onChangeText={(days) => this.setState({days})} />
            <TextInput placeholder='HOUR' onChangeText={(hours) => this.setState({hours})} />
          </View>
          <Button text='Request Ride' onPress={() => saveRideRequest(this.state)} />
        </View>
      </View>
    )
  }
}

export default RideRequestScreen
