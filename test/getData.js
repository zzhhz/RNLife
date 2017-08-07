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
//传入url
function getRequest(url) {
    var opts = { method: "GET" };
    fetch(url, opts).then((response) => {
        return response.text();
    }).then((responseText) => {
        alert(responseText);
    }).catch((error) => {
        alert(error);
    });
}

//界面
var GetData = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={getRequest.bind(this, "http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123")}
                    style={styles.btn}>
                    <Text>GET</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text>POST</Text>
                </TouchableOpacity>
            </View>
        );
    }
});
//样式
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