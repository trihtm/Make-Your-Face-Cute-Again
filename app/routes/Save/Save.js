'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
    ScrollView,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {Surface} from "gl-react-native";

const {Image: GLImage} = require("gl-react-image");

import {
    F1977,
    Amaro,
    Brannan,
    Earlybird,
    Hefe,
    Hudson,
    Inkwell,
    Lokofi,
    LordKelvin,
    Nashville,
    Normal,
    Rise,
    Sierra,
    Sutro,
    Toaster,
    Valencia,
    Walden,
    XproII
} from "gl-react-instagramfilters";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },

    image: {
        flex: 1
    },

    overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center',
    },

    filterOverlay: {
        bottom: 68.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default class Save extends Component
{
    static propTypes = {
        path: PropTypes.string.isRequired,
    };

    state = {
        imageSize: null,
        activeFilter: 'Normal'
    };

    constructor(props) {
        super(props);

        this.renderActiveFilter = this.renderActiveFilter.bind(this);
        this.filterPicture = this.filterPicture.bind(this);
        this.sharePicture = this.sharePicture.bind(this);
    }

    componentWillMount() {
        Image.getSize(this.props.path, (width, height) => {
            this.setState({
                activeFilter: 'Normal',
                imageSize: { width, height }
            });
        });
    }

    filterPicture(filter) {
        this.setState({
            activeFilter: filter
        });
    }

    renderActiveFilter() {
        let image = <GLImage
            source={this.props.path}
            imageSize={this.state.imageSize} />;

        switch (this.state.activeFilter) {
            case 'Valencia':
                return <Valencia>{image}</Valencia>;
                break;

            case 'Brannan':
                return <Brannan>{image}</Brannan>;
                break;

            case 'Rise':
                return <Rise>{image}</Rise>;
                break;

            case 'F1977':
                return <F1977>{image}</F1977>;
                break;

            case 'Normal':
                return <Normal>{image}</Normal>;
                break;

            default:
                throw "Unsupported filter";
        }
    }

    sharePicture() {
        Actions.share();
    }

    render() {
        const {height, width} = Dimensions.get('window');

        const {imageSize} = this.state;

        if (!imageSize) return <View />;

        let activeFilter = this.renderActiveFilter();

        return <View style={styles.imageContainer}>
            <Surface ref="img" width={width} height={height}>
                {activeFilter}
            </Surface>

            <View style={[styles.overlay, styles.filterOverlay]}>
                <Button
                    onPress={() => this.filterPicture('Valencia')}
                    title="Valencia"
                    color="#FFF"
                />

                <Button
                    onPress={() => this.filterPicture('Brannan')}
                    title="Brannan"
                    color="#FFF"
                />

                <Button
                    onPress={() => this.filterPicture('Normal')}
                    title="Normal"
                    color="#FFF"
                />

                <Button
                    onPress={() => this.filterPicture('F1977')}
                    title="F1977"
                    color="#FFF"
                />

                <Button
                    onPress={() => this.filterPicture('Rise')}
                    title="Rise"
                    color="#FFF"
                />
            </View>

            <View style={[styles.overlay, styles.bottomOverlay]}>
                <Button
                    onPress={this.filterPicture}
                    title=""
                    color="#FFF"
                />

                <Button
                    onPress={this.sharePicture}
                    title="Share"
                    color="#FFF"
                />
            </View>
        </View>
    }
}