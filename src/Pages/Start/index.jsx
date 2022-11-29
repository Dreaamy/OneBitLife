import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, Image} from "react-native";


export default function Start(){

    return{
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <view>
                    <image
                        source=(require("../../assets/icons/logo3.png"))
                    />
                    <text>
                        Vamos tranformar sua vida {"/n"} em jogo , buscando sempre o melhor {"/n"} o melhor nivel
                    </text>
                </view>
            </ScrollView>
        </View>
    };
}