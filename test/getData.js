import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
//http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123
//http://exp.zhidong.cn/init/1001?data={"mapx":"36.671323","appVersion":"2.0.7","resolutiony":"1776","mapy":"116.909925","brand":"htc","userId":"","deviceNo":"00000000-2d37-23e6-0000-00004014d1f3","ip":"fe80::5ceb:faff:fe1b:bf27%dummy0","osVersion":"6.0.1","type":"9","resolutionx":"1080"}
function getRequest(url) {
    var opts = {method: "GET"};
    fetch(url, opts).then((response) => {
        return response.text();
    }).then((responseText) => {
        alert(responseText);
    }).catch((error) => {
        alert(error);
    });
}

function postRequest(url) {
    var data = new FormData();
    data.append("username", "显示个中文");
    data.append("password", "698745213");
    var opts = {method: "POST", body: data};
    fetch(url, opts).then((response) => {
        return response.text();
    }).then((responseText) => {
        alert(responseText)
    }).catch((error) => {
        alert(error);
    });


}


var GetData = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={getRequest.bind(this, "http://192.168.200.58:8080/WebDemo/LoginServlet?username=lanou&password=123")}
                    style={styles.btn}>
                    <Text>GET</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={postRequest.bind(this, "http://192.168.200.58:8080/WebDemo/LoginServlet")}>
                    <Text>POST</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "cyan",
        alignItems: "center"
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    }


});

module.exports = GetData;