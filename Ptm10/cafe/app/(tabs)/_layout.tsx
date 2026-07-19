import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title:"Home"
        }}
      />

      <Tabs.Screen 
        name="menu"
        options={{
          title:"Menu"
        }}
      />

      <Tabs.Screen 
        name="pemesanan"
        options={{
          title:"Pemesanan"
        }}
      />

      <Tabs.Screen 
        name="laporan"
        options={{
          title:"Laporan"
        }}
      />

    </Tabs>
  );
}