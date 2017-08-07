/****
 * 传值
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";

//输入页面
var InputPage = React.createClass({
    getInitialState: function () {
        return {content: ""};
    },

    /**
     * 或得到输入的文本信息
     * @param inputText 输入的文本
     */
    getInputContent: function (inputText) {
        this.setState({
            content: inputText //将输入的文本保存到属性state当中
        });

    },

    /**
     * 跳转到下一页
     */
    pushNextPage: function () {
        //传值
        var route = {
            component: DetailPage,//要跳转的页面
            passProps: {//带的值
                showText: this.state.content
            }
        };
        //跳转方法
        this.props.navigator.push(route);
    },

    render: function () {
        return (
            <View style={inputStyle.container}>
                <TextInput style={inputStyle.input} placeholder="请输入内容"
                           onChangeText={this.getInputContent}/>
                <TouchableOpacity style={inputStyle.btn} onPress={this.pushNextPage}>
                    <Text>
                        进入下一个页面
                    </Text>
                </TouchableOpacity>
            </View>
        );

    }
});
//详情页面
var DetailPage = React.createClass({
    //返回上一级页面
    popFrontPage: function () {
        this.props.navigator.pop();
    },

    render: function () {
        return (<View style={detailStyle.container}>
            //显示文本
            <Text style={detailStyle.text}>{this.props.showText}</Text>
            <TouchableOpacity style={detailStyle.btn} onPress={this.popFrontPage}>
                <Text>返回上一页</Text>
            </TouchableOpacity>
        </View>);
    }
});


var LessonNavigator = React.createClass({
    render: function () {
        var rootRoute = {
            component: InputPage,
            passProps: {}
        };
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={rootRoute}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        var Component = route.component;
                        return (<Component
                            navigator={navigator}
                            route={route}
                            {...route.passProps}
                        />);
                    }}
                />
            </View>
        );
    }
});
var detailStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text: {
        height: 45,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"

    },
    btn: {
        marginTop: 20,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        padding: 5
    }


});
var inputStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    input:
        {
            height: 45,
            marginLeft: 25,
            marginRight: 25,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
            padding: 5,
            justifyContent: "center",
            alignItems: "center"

        },
    btn: {
        marginTop: 20,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        padding: 5
    }


});

module.exports = LessonNavigator;