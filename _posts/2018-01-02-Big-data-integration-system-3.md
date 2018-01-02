---
layout: post
title:  "Big Data Integration Systems 3"
date:   2018-01-02 22:00:17 +0000
author: xgan
categories: big data, machine learning
---
## Summary
> - Data stream
> - Streaming data
> - DBMS

## Data Stream
- A possibly unbounded sequence of data recoreds.
    - Timestamped
    - Geo-tagged
- Streaming data system
    - Manage one record or small time window
    - Near-real-time processing
    - Independent comutations
    - Non-interactive

## Streaming Data
- Data-at-Rest
    - Mostly static data from one or more sources
    - Collected prior to analysis
- Data-in-Motion
    - Analyzed as it is generated
    - Stream processing
- Data processing algorithms
    - Static/Batch -> size determines time and space
    - Streaming -> unbounded size, but finite time and space
- Streaming data management and processing
    - Compute one data element or a small window of data elements at a time
    - Relatively fast and simple computations
    - No interaction with the data source
- Lambda Architecture

## Data Lakes
- A big data storage architecture
- Collects all data for current and future analysis
- Transforms data format only when needed
- Supports all types of big data users
- Infrastructure components which evolve over time based on application-specific needs

## DBMS
- Files system storage
    - Data redundancy, inconsistency and isolation
    - Each task a program
    - Data integrity
    - Atomicity of updates
- Advantages of a DBMS
    - Declarative query languages
        - No more task-based programs
    - Data independence
        - Applications don't worry about data storage formats and locations
    - Efficient access through optimization
        - The system automatically finds an efficient way to access data
    - Data integrity and security
        - Methods to keep the accuracy and consistency of data despite failure
    - Concurrent access 
        - Many users can simultaneously access data without conflict
- DBMS vs MapReduce-style Systems
    - DBMS: efficient storage, transactions and retrieval
        - Partitioned data parallelism
        - Account for computation and communication cost
        - Not node failure
    - Mapreduce-style systems: complex data processing over a cluster of machines
        - HDFS-based
        - Analytics-data mining, clustering, machine learning
        - Multi-stage, problem-specific algorithms
        - Operate on wider variety of data including text



