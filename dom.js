window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.content.firstChild;
  },
  before(nodeInPage, nodeToInsert) {
    nodeInPage.parentNode.insertBefore(nodeToInsert, nodeInPage);
  },
  after(nodeInPage, nodeToInsert) {
    nodeInPage.parentNode.insertBefore(nodeToInsert, nodeInPage.nextSibling);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(child, parent) {
    dom.before(child, parent);
    dom.append(parent, child);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const removedElmentsList = [];
    while (node.firstChild) {
      removedElmentsList.push(dom.remove(node.firstChild));
    }
    return removedElmentsList;
  },

  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },

  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },

  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },

  style(node, name, value) {
    if (arguments.length === 3) {
      // dom.style(node, 'color','red'})
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(node, 'color')
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(node, {color: 'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },

  //获取一个节点的所有兄弟节点
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },

  //获取一个节点的下一个node
  next(node) {
    let nextNode = node.nextSibling;
    while (nextNode && nextNode.nodeType === 3) {
      nextNode = nextNode.nextSibling;
    }
    return nextNode;
  },

  //获取一个节点的上一个node
  previous(node) {
    let previousNode = node.previousSibling;
    while (previousNode && previousNode.nodeType === 3) {
      previousNode = previousNode.previousSibling;
    }
    return previousNode;
  },

  //获取一个节点在其父元素的子元素里的index
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
