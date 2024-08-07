---
layout: post
title:  "자바스크립트 기초"
date:   2024-08-06 01:00:00 +0300
image:  
tags:   자바스크립트 javaScript
---

--------------------------------------------------------------------------------------

# 유형 변환

## 문자열 변환
`String(value)`
```groovy

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

```

## 숫자 변환
`Number(value)`
```groovy

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

```

* 문자열이 유효한 숫자가 아닐 경우

```groovy

let age = Number("test");
alert(age);

// NaN 출력

```


```groovy

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

```

## 부울 변환
`Boolean(value)`
```groovy

alert( Boolean(1) );            // true
alert( Boolean(0) );            // false

alert( Boolean("hello") );       // true
alert( Boolean("") );            // false

```


# 기본 연산자
## 지수화 **
```groovy

alert( 2 ** 2 );                 // 2² = 4
alert( 2 ** 3 );                 // 2³ = 8
alert( 2 ** 4 );                 // 2⁴ = 16

alert( 4 ** (1/2) );            // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) );            // 2 (power of 1/3 is the same as a cubic root)

```