import { Tabs } from "expo-router";

export default function TabLayout(){
    return (
        <Tabs>
          <Tabs.Screen name="vistaLista"/>
          <Tabs.Screen name="vistaListaSeccion"/>
        </Tabs>
    )
}