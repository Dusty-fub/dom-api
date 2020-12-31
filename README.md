# dom-api

## 使用说明

1.  引入 dom.js

2.  api

    - 创建节点

      ```javascript
      dom.create("<div>node</div>");
      ```

    - 将节点插到某节点之前

      ```javascript
      dom.before(nodeInPage, nodeToInsert);
      ```

    - 将节点插到某节点之后

      ```javascript
      dom.after(nodeInPage, nodeToInsert);
      ```

    - 将一个节点附加到指定父节点的子节点列表的末尾处

      ```javascript
      dom.append(parent, child);
      ```

    - 为指定节点添加父节点

      ```javascript
      dom.wrap(child, parent);
      ```

    - 删除某节点

          ```javascript
          let removedNode = dom.remove(node);
          ```

    - 清空指定节点的子节点

          ```javascript
          let removedElmentsList = dom.empty(node);
          ```

    - 更改指定节点的属性

      ```javascript
      dom.attr(node, name, value);
      ```

    - 获取指定节点的属性

      ```javascript
      let attribute = dom.attr(node, name);
      ```

    - 更改指定节点的 innerText

      ```javascript
      dom.text(node, textString);
      ```

    - 读取指定节点的 innerText

      ```javascript
      let nodeText = dom.text(node);
      ```

    - 更改指定节点的 innerHtml

      ```javascript
      dom.html(node, htmlString);
      ```

    - 读取指定节点的 innerHtml

      ```javascript
      let nodeHtml = dom.html(node);
      ```

    - 查找节点

      ```javascript
      const el = dom.find("#test>.red")[0];
      ```

    - 获取样式

      ```javascript
      let nodeColor = dom.style(node, "color");
      ```

    - 更改样式

      ```javascript
      dom.style(node, 'color','red'});
      dom.style(node, {color: 'red'})
      ```

    - 为指定节点添加 class

      ```javascript
      dom.class.add(node, className);
      ```

    - 移除指定节点的指定 class

      ```javascript
      dom.class.remove(node, className);
      ```

    - 判断指定节点是否含有指定 class

      ```javascript
      dom.class.has(node, className);
      ```

    - 绑定事件

      ```javascript
      dom.on(node, eventName, fn);
      ```

    - 解除事件绑定

      ```javascript
      dom.off(node, eventName, fn);
      ```

    - 遍历节点数组，循环执行函数，并将节点作为参数传入

      ```javascript
      dom.each(nodeList, fn);
      ```

    - 获取指定节点的所有兄弟节点

      ```javascript
      let siblings = dom.siblings(node);
      ```

    - 获取一个节点的下一个 node

      ```javascript
      let nextNode = dom.next(node);
      ```

    - 获取一个节点的上一个 node

      ```javascript
      let previousNode = dom.previous(node);
      ```

    - 获取一个节点在其父元素的子元素里的 index

      ```javascript
      let nodeIndex = dom.index(node);
      ```
