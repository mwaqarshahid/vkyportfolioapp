import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { URLs } from "@/constants/URLs";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const { websiteURL } = URLs;
  return (
    <SafeAreaView style={styles.mobileView}>
      {Platform.OS === "web" ? (
        <iframe src={websiteURL} style={styles.webView} />
      ) : (
        <WebView source={{ uri: websiteURL }} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mobileView: {
    flex: 1,
    paddingTop: 50,
  },
  webView: {
    width: "100%",
    height: "100%",
  },
});
