---
layout: post
title:  "Big Data Integration Systems 1"
date:   2017-12-27 22:21:17 +0000
author: xgan
categories: machine learning
---
## Summary
> - Why big data modeling and management is essential in preparing to gain insights 
> - Different kinds of data models
> - Describe streaming data
> - Differences between a DBMS and a BDMS 
> - Big data processing
> - Variety, Volume, Velocity

## Different kinds of data models
- Relational Data
	- tables
- Semi-structured Data
	- Document data, XML and JSON
- Graph Data
	- Social Networks, email networks
- Text Data
	- Articles, reports

## Streaming Data
- Flow of data coming from data source
	- sensor data from instruments
	- stock price data
- Data rates vary
- Processed in memory

## DBMS vs BDMS
- BDMS
	- designed for parallel and distributed processing
	- guarantee eventual consistency
	- Map-reduce style comutation
	- utilizes replication offered by HDFS

## Big data processing
- Support big data operations
    - split volumes of data
    - access data fast
    - distribute comutations to nodes
- Handle fault tolerance
    - replicate data partitions
    - recover files when needed
- Enable adding more racks
- Optimized and extensible for many data types
    - document, table, map, graph, multimedia, stream
- Enable both streaming and batch processing

## 3V
- volume 
    - scalable batch processing
- velocity
    - streaming processing
- variety
    - extensible data storage, access and integration

