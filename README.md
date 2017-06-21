# hexo-description
[![npm version](https://img.shields.io/npm/v/hexo-description.svg)](https://www.npmjs.com/package/hexo-description)

A plugin for hexo. If post has no description set, will auto use excerpt as description.

## Install

`npm install hexo-description --save`

## How work

Workflow: 

1. Origin post
```markdown
---
title: Example post
---
## excerpt
- list1
- list2
<!-- more -->
content
```

2. Origin excerpt
```markdown
## excerpt
- list1
- list2
```

3. Rendered excerpt
```html
<h2>excerpt</h2>
<li>list1</li>
<li>list2</li>
```

4. Finally we set pure excerpt text to description
```text
excerptlist1list2
```

## Compatible list

- [ALiangLiang/hexo-excerpt-block](https://github.com/ALiangLiang/hexo-excerpt-block)
- [fuchen/hexo-less](https://github.com/fuchen/hexo-less)