import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";

var FirstPage = React.createClass({
    pressPush: function () {
        //推出下一级页面
        var nextRoute = {
            component: SecondPage
        };
        this.props.navigator.push(nextRoute);

    },
    render: function () {
        return (
            <View style={[styles.flex, {backgroundColor: "yellow"}]}>
                <TouchableOpacity style={styles.btn} onPress={this.pressPush}>
                    <Text>点击推出下一级页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
});
var SecondPage = React.createClass({
    pressPop: function () {
        //返回上一级页面
        this.props.navigator.pop();

    },
    render: function () {
        return (
            <View style={[styles.flex, {backgroundColor: "blue"}]}>
                <TouchableOpacity style={styles.btn} onPress={this.pressPop}>
                    <Text>点击返回上一级页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var LessonRoutePage = React.createClass({

    render: function () {
        var rootRoute = {
            component: FirstPage
        };
        return (<Navigator
            /**
            第一步：指定默认的页面, 初始化路由。对象的属性自定义*/
            initialRoute={rootRoute}
            /**
            指定页面的跳转方式，右进左出等。
*/
            configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            /**
            *
*/
            renderScene={(route, navigator) => {
                var Component = route.component;
                return (
                    <Component
                        navigator={navigator}
                        route={route}
                    />
                );

            }}
        />);
    }
});

var styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: 150,
        height: 30,
        borderColor: "#0089ff",
        borderWidth: 2
    }
});

module.exports = LessonRoutePage;