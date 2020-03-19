<template>
  <div>

  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import {mapState} from 'vuex';
export default {
  data() {
    return {};
  },
  computed: mapState(['count']),

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log("file: " + file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
