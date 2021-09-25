<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator/>
    </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
    components: { Calculator }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", "monospace", "sans-serif";
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: radial-gradient(circle, rgb(7, 23, 100) 0%, rgba(1, 4, 158, 0.692) 100%);;
}
</style>