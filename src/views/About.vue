<template>
  <div class="about">
    <h1>Samples</h1>
    <h2>
      Template
      <a href="/template/index.html">To.</a>
    </h2>
    <h2>
      Video
      <a href="/video/index.html">To.</a>
    </h2>
    <h2>
      Travel
      <a href="/travel/index.html">To.</a>
    </h2>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted() {
    // fetch("//pv.sohu.com/cityjson")
    // fetch("http://localhost:3000/search?ip=127.0.0.1&time=99")
    // fetch("https://sit-ping.51uuabc.com/apm_ping/ping.js")
    // fetch("https://sit-ping.51uuabc.com/apm_ping/ping_c.js")
    var time = Date.now();
    fetch("https://sit-ping.51uuabc.com/apm_ping/ping.js", {
      method:"GET",
      headers: { 'x-uu-req-id': 'application/json;charset=8'}
    }).then(response => {
        console.log(response);
        return response.json();
      }) //定义返回的类型和数据格式
      .then(data => {
        console.log(Date.now()-time, data)
      }); // 返回的数据

    fetch("https://sit-ping.51uuabc.com/apm_ping/ping_c.js", {
      method:"GET",
      headers: { 'x-uu-req-id': 'application/json;charset=utf-8'}
    }).then(response => {
        console.log(response);
        return response.json();
      }) //定义返回的类型和数据格式
      .then(data => {
        console.log(Date.now()-time, data)
      }); // 返回的数据
  }
};
</script>

