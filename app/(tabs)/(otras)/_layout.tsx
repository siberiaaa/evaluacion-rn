import { Tabs } from "expo-router";

export default function TabLayout(){
    return (
        <Tabs>
          <Tabs.Screen name="vistaSaludo"/>
          <Tabs.Screen name="vistaInput"/>
          <Tabs.Screen name="vistaScroll"/>
        </Tabs>
    )
}