---
layout: post
title:  "통합구현"
date:   2024-07-09 06:00:00 +0300
image:  10.jpg
tags:   Jekyll
---
1. 연계메커니즘 구성
2. 내외부 연계 모듈 구현

 `YYYY-MM-DD-name-of-post.ext` 



<ul>
  <li>연계  메커니즘 : 응용 소프트웨어와 연계 대상 모듈 간의 데이터 연계 시 요구사항을 고려한 연계방법과 주기를 설계하기 위한 흐름이다.</li>
</ul>


* 연계 방식
<table>
  <thead>
    <tr>
      <th>분류</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>직접 연계 방식</th>
      <td>구성 요소들이 적접적으로 서로 연결되어 있는 방식</td>
    </tr>
    <tr>
      <th>간접 연계 방식</th>
      <td>중간 매개체를 통해 구성 요소들이 통신하는 방식</td>
    </tr>
  </tbody>
<table>



* 간접 연계

<ul>
  <li>EAI(Enterprise Application Integration) - 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션들 간의 정보전달, 연계, 통합을 가능하게 해주는 솔루션</li>
  <li>ESB(Enterprise Service Bus) - 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션들 간을 하나의 시스템으로 관리 운영할 수 있도록 서비스 중심의 통합을 지향하는 아키텍쳐</li>
  <li>웹 서비스 - WSDL / SOAP</li>
  <li>소켓</li>
</ul>

*  직접 연계
<ul>
  <li>DB 링크</li>
  <li>DB 연결</li>
  <li>API/Open API</li>
  <li>JDBC</li>
  <li>하이퍼 링크</li>
</ul>










{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
