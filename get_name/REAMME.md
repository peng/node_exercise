# 报名系统  
方法均为post
##  报名接口  
1.
```
url:'/addname'
传递参数
{
  name:string,
  phone:string || number,
  city:id -> number
}

返回参数  object
成功
{
  success:'success'
}
失败
{
  error:error message
}
```
#### 校验 
1.姓名是否合规，手机号码是否合规
2.是否为同一人校验(如果姓名手机号码一样则为同一个人)

## 后台管理
### 1-查询接口
post方法  
1.名字查询  
2.城市查询  
3.电话号码查询 
4.如果什么都不传默认为查询所有  
以上方法只能单选  
返回一个数组
```
url:'search'
传递参数
{
  name || city || phone || none :,
  { //options 可选
    page:number 查询的页数，必填，默认2,
    single:boolean 查询的是否为单页，默认为false，意思是返回所有1-page数量所有页面数据，如果设置为true 则返回单页的数据
    size:number 必填，设置选返回每页的数据数量，默认为10
  }
  
}
返回参数
[{
  name:string,
  phone:number,
  city:string,
  userId:number,
  time:string
}]
```
### 2-修改接口

```
url:'modify'
需要传递 
{
  userId:number,
  name:string,
  phone:number,
  city:string
}

返回参数  object
成功
{
  success:'success'
}
失败
{
  error:error message
}
```

### 3-删除接口

```
url:'/delete'
需要传递
{
  userId:number
}

返回参数  object
成功
{
  success:'success'
}
失败
{
  error:error message
}
```




## 数据库结构
userId,name,phone,cityid,time