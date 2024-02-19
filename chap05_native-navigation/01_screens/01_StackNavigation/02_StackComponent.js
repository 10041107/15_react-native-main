import { Button, Text, View } from "react-native";


const StackComponent=({route, navigation})=>{

    const page = ()=>{
        navigation.navigate("StackView");
    }

    const tapRouter = ()=>{
        navigation.navigate("NestingNavigation");
    }

    return(
        <View>
            <Text>
                Stack View 화면
            </Text>
            <Button onPress={page} title="이동"/>

            <View>
                <Text> Tab 메뉴 이동</Text>
                <Button onPress={tapRouter} title="Tap이동"/>
                {/* <Button> 이렇게 차일드 요소 가지는거 불가능함 </Button> */}
            </View>

        </View>
    )
}

export default StackComponent;