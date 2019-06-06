<template>
  <view class="container">
    <view class="box" :style="{ width: 300, height: 300 }">
      <camera class="container" :type="this.type" ref="cameraMobile" />
    </view>
    <view class="box">
      <text class="h1">Photo app</text>
      <text class="text-color-primary">My Vue Native App test</text>
      <text class="text-color-primary">blabla</text>
      <image
        v-if="image"
        :style="{ width: 66, height: 58 }"
        :source="{
          uri: image
        }"
      />
      <button
        :on-press="takePicture"
        title="Take picture"
        color="#841584"
        accessibility-label="Learn more about this purple button"
      />
    </view>
  </view>
</template>

<script>
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

export default {
  data: function() {
    return {
      message: "hello there",
      image: null,
      result: null,
      hasCameraPermission: false,
      type: Camera.Constants.Type.back
    };
  },
  methods: {
    async takePicture() {
      try {
        let photo = await this.$refs.cameraMobile.takePictureAsync();
        console.log(photo);
        this.image = photo.uri;
      } catch (error) {
        console.error("error: ", error.message);
      }
    }
  },
  mounted: function() {
    Permissions.askAsync(Permissions.CAMERA)
      .then(status => {
        hasCameraPermission = status.status == "granted" ? true : false;
      })
      .catch(err => {
        console.log(err);
      });
    console.log(Camera.Constants);
  },
  components: { Camera }
};
</script>

 
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.box {
  flex: 1;
}
.text-color-primary {
  color: blue;
}

.h1 {
  font-size: 40;
}
</style>
