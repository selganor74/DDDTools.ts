typescript ddd tools
====================

(https://git.loccioni.com/IT/ddd-tools)

A typescript implementation of the basic DDD patterns.

## What is in it?

The package exports a DDDTools "namespace" composed by these elements

### Main Patterns

* ValueObject
* Entity
* Aggregate


## Examples

`TODO`

## Change log

### 0.0.9 2016 05 24

* Fixed BUG in Serialization of RegExp

### 0.0.8 2016 05 20

* Added IQueryAsync in Query namespace Query

### 0.0.7 2016 05 18

* Added this changelog!
* Added typings support in package.json
* Removed /// reference from ddd-tools.d.ts
* New tests for the InMemoryRepositoryAsync
* [Breaking Change!] - Renamed BaseInMemoryRepository to InMemoryRepository, no more abstract.