<template>
  <div id="app">
      <h1 style="margin-bottom:50px;">vue2-draggable文档（document）</h1>
    <div>
      <h2>一、注意！</h2>
      <p>1.拖动的元素，指令会自动加上position:absolute;</p>
      <p>2.如果父元素没有使用position定位，那么指令会自动给父元素加上position:relative;</p>
      <p>3.默认元素是无法拖出容器之外的</p>
      <p style="color:red"><strong>4.约定：拖动元素的父级必须是容器元素</strong></p>
      <p style="color:red"><strong>5.为了避免父子margin重叠造成高度计算误差，不要对拖拽元素使用margin属性。（注意：如果容器已经BFC化的话就无视这条，例如设置了overflow:hidden）</strong></p>
    </div>
    <hr>
    <div>
      <h2>二、如何使用</h2>
      <h3>安装</h3>
      <p style="color:blue"><strong>npm install vue-dragdrag --save-dev </strong></p>
      <p style="color:blue"><strong>import vueDragDrag from 'vue-dragdrag' </strong></p>
      <p style="color:blue"><strong>Vue.use(vueDragDrag)</strong></p>
      <h3>vue指令使用</h3>
      <p style="color:green"><strong>&lt;div v-drag&gt;&lt;/div&gt;</strong></p>

    </div>
    <hr>
    <h2>三、实例展示</h2>
    <div class="container">
      <h4>容器内自由拖动</h4>
      <div class="test1"
           v-drag>v-drag</div>
    </div>

     <div class="container">
      <h4>ondrag事件</h4>
      <h4 style="color:green">源码: binding.value.ondrag(event, { left: left, top: top })</h4>
      <h4 style="color:green">drag方法: drag(event,coordinate){ console.log(event, coordinate.left, coordinate.top) }</h4>
      <div class="test1" style="width:400px;"
           v-drag="{ondrag:drag}">v-drag="{ondrag:drag}"</div>
    </div>

    <div class="container">
      <h4>只能在容器内水平拖动</h4>

      <div class="test2"
           v-drag.dragX> v-drag.dragX</div>
    </div>
    <div class="container">
      <h4>只能在容器内垂直拖动</h4>

      <div class="test3"
           v-drag.dragY>v-drag.dragY</div>

    </div>
    <div class="container">
      <h4>指定拖拽时鼠标样式,其值与cursor属性值一样</h4>

      <div class="test5"
           v-drag="{cursor:'move'}">v-drag="{cursor:'move'}"</div>

    </div>
    <div class="container">
      <h4>moveElId为实际移动的元素的Id，默认拖动元素为自身</h4>
      <div class="test4"
           id="test4-move">
        <div class="test4-drag"
             v-drag="{moveElId:'test4-move'}">v-drag="{ moveElId: 'test4-move' }"</div>
        <div class="test4-content">
          CONTENT
        </div>
      </div>
      <pre style="text-align:left;">
        &lt;div class=&quot;container&quot;&gt;
          &lt;div class=&quot;test4&quot;
               id=&quot;test4-move&quot;&gt;
            &lt;div class=&quot;test4-drag&quot;
                 v-drag=&quot;{moveElId:'test4-move'}&quot;&gt;v-drag=&quot;{ moveElId: 'test4-move' }&quot;&lt;/div&gt;
            &lt;div class=&quot;test4-content&quot;&gt;
              CONTENT
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

          </pre>
    </div>
    <div class="container">
      <h4>.shaow 修饰符，实现和window桌面图标拖动的效果</h4>
      <div class="test4"
      style="width:300px"
           id="test4-move2">
        <div class="test4-drag"
             v-drag.shaow="{moveElId:'test4-move2'}">v-drag.shaow="{ moveElId: 'test4-move2' }"</div>
        <div class="test4-content">
          CONTENT
        </div>
      </div>

    </div>
    <div class="container">
      <h4>允许拖出容器之外，但是设置保留值</h4>
      <h4>{ dragOutX:15,dragOutY:15 }代表有<strong style="color:red">上下和左右</strong>有15px的保留距离</h4>
      <h4>如果值设置成 { dragOutX:15 }代表<strong  style="color:red">只有左右</strong>15px的保留距离</h4>
      <h4 style="color:red;">dragOutX,dragOutX的值必须为数字类型</h4>

      <div class="test5"
           v-drag="{dragOutX:15,dragOutY:15}">v-drag="{dragOutX:15,dragOutY:15}"</div>
    </div>
    <div class="container">
      <h4>组合使用</h4>
      <div class="test6"
           v-drag.dragX="{dragOutX:60}">v-drag.dragX="{dragOutX:60}"</div>
    </div>


    <div class="container">
      <h4>向上拖动时，可拖动区域不会被拖出去,但是样式需要限制为，可拖动区域在顶部,且宽度与外层相等</h4>
      <div class="test4"
           style="width:400px"
           id="test4-move3">
        <div class="test4-drag"
             style="width:400px"
             v-drag.shaow="{ moveElId: 'test4-move3',dragOutX:15,dragOutY:15 }">v-drag="{ moveElId: 'test4-move3',dragOutX:15,dragOutY:15 }"</div>
        <div class="test4-content">
          CONTENT
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data() {
    return {
      arr: [1111, 2222, 4444, 5555]
    }
  },
  methods:{
    drag(e,obj) {
      console.log(e,obj)
    }
  },
  components: {
    Hello
  }
}
</script>

<style lang="scss">
#app {
  width: 800px;
  margin: 0 auto;
  .container {
    border: 1px solid;
    margin: 20px;
    height: 400px;
    text-align: center;
  }
  .test1 {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border: 1px solid red;
    text-align: center;
  }
  .test2,
  .test3 {
    width: 160px;
    height: 50px;
    border: 1px solid blue;
    text-align: center;
    line-height: 50px;
  }

  .test3 {
    border: 1px solid green;
  }
  .test4 {
    font-size: 12px;
    width: 260px;
    height: 260px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 50px;
    color: white;
    .test4-drag {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: black;
      opacity: .5;
    }
    .test4-content {
      font-size: 40px;
      line-height: 210px;
      height: 210px;
      text-align: center;
      color: black;
      width: 100%;
    }
  }
  .test5 {
    background: #ccc;
    height: 140px;
    width: 350px;
    line-height: 140px;
    text-align: center;
    opacity: .7;
  }
  .test6 {

    width: 400px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: yellow;
    opacity: .7;
  }
}
</style>
