---
layout: post
title:  "통합구현"
date:   2024-07-09 06:00:00 +0300
image:  
tags:   Jekyll
---


1. 연계메커니즘 구성
2. 내외부 연계 모듈 구현


<ul>
  <li>연계  메커니즘 : 응용 소프트웨어와 연계 대상 모듈 간의 데이터 연계 시 요구사항을 고려한 연계방법과 주기를 설계하기 위한 흐름이다.</li>
</ul>


# 연계 방식
<ul>
  <li>직접 연계 방식 : 구성 요소들이 적접적으로 서로 연결되어 있는 방식</li>
  <li>간접 연계 방식 : 중간 매개체를 통해 구성 요소들이 통신하는 방식</li>
</ul>



### 간접 연계
<ul>
  <li>EAI(Enterprise Application Integration) - 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션들 간의 정보전달, 연계, 통합을 가능하게 해주는 솔루션</li>
  <li>ESB(Enterprise Service Bus) - 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션들 간을 하나의 시스템으로 관리 운영할 수 있도록 서비스 중심의 통합을 지향하는 아키텍쳐</li>
  <li>웹 서비스 - 네트워크에 분산된 정보를 서비스 형태로 개방하여 표준화된 방식. WSDL / SOAP</li>
  <li>소켓</li>
</ul>

###  직접 연계
<ul>
  <li>DB 링크</li>
  <li>DB 연결</li>
  <li>API/Open API</li>
  <li>JDBC - 데이터베이스에서 자료를 조회하거나 업데이트하기 위해서 자바에서 데이터베이스에 접속할 수 있도록 하는 자바 API</li>
  <li>하이퍼 링크</li>
</ul>




----------------------------------------------------

# 연계 모듈 구현 환경 구성 및 개발

### EAI 방식

### EAI 구축 유형
<ul>
  <li>포인트 투 포인트</li>
  <li>허브 앤 스포크</li>
  <li>메시지 버스</li>
  <li>하이브리드 - 그룹 내는 허브 앤 슽포크 방식, 그룹 간에는 메시지 버스 방식 사용</li>
</ul>

### ESB 방식
'느슨한 결합'

### 웹 서비스 방식

<ul>
  <li>HTTP - 프로토콜</li>
  <li>Hypertext - 링크</li>
  <li>HTML - 마크업 언어</li>
</ul>

### 웹 서비스 유형
* SOAP - HTTP, SMTP등을 사용하여 XML 기반의 메시지를 교환하는 프로토콜
* WSDL - 웹 서비스명, 제공 위치, 메시지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보가 기술된 XML 형식으로 구현되어있는 언어이다.
* UDDI - 

### IPC 방식













----------------------------------------------------







 `YYYY-MM-DD-name-of-post.ext` 





 __You people wonder why I'm still single?__
## Are you crazy? I can't swallow that.
### Why not indeed!




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
