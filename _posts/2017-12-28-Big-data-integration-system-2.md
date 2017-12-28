---
layout: post
title:  "Big Data Integration Systems 2"
date:   2017-12-28 22:21:17 +0000
author: xgan
categories: machine learning
---
## Summary
> - Basic data operations
> - Structured and unstructured data
> - Vector space model & Graph data model

## Operations
- Subsetting
- Substructure extraction
    - Givent a data collection with some structure, extract from each data item a part of the structure
    as specified by a condition
- Union, Join
    - Given two data collections, create a new one with elements of the two input collections
    - Duplicate elimination

## Constraints
- Constraints are logical statements that must hold for data
- Types of constraints
    - Value constraint
    - Uniqueness onstraint
    - Cardinalty constraint
    - Type constraint
    - Domain constraint

## Relational Data Model
- A collection of Tables
- No duplicates
- Dissimilar tuples disallowed
- Relational Schema

## Semi-structured Data Model
- Tree-structured data model: xml, json

## Vector Space Model
- Many document and image search engines use vector models and similarity search
- Document vector to tf-idf(inverse document frequency) matrix
$$ {\displaystyle \mathrm {tfidf} (t,d,D)=\mathrm {tf} (t,d)\cdot \mathrm {idf} (t,D)} $$
- Image search : create tf-idf matrix for RGB pixels

## Graph Data Model
- Social Network
- "Optimal Path" Operations
    - Shortest path between two nodes
    - Optimal round-trip path that include some specific nodes


