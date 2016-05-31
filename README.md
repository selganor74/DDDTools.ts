typescript ddd tools
====================

(https://git.loccioni.com/IT/ddd-tools)

A typescript implementation of the basic DDD patterns.

## What is in it?

The package exports a DDDTools "namespace" composed by these elements

### Main Patterns

* **ValueObject**
* **Entity**
* **Aggregate** 
* **Repository**
* **UnitOfWork**
* **DomainEvents**

### Tools and utilities

* **Serialization**: "Smart" Serialization/Deserialization which takes into account 
  reconstitution of object trees and of "special types" like Date and RegExp.
  It can be used "as a stand alone" tool.
  
* **PersistableObject**: Manages "evolution" of objects that can be persisted. 
  Objects whose state can survive between program "executions" must provide a 
  mean of "upgrading" their state, to follow changes due requirements and bugs. 
  
* **ValueObjects**: a growable collection of general purpose Value Objects.

## Usage

Package can be installed via npm from registry https://npm.loccioni.com.  
Once installed you need to reference **node_modules/typescript-ddd-tools/build/browser/ddd-tools.js**
in your **index.html**, and reference **ddd-tools.d.ts** in the same directory to 
have typescript ambient definitions.
The library is quite invasive, meaning that it is impossible to use different 
versions of the same library as it "pollutes" the global namespace adding the 
"DDDTools" namespace


## Dependencies

The package has the following dependencies: 

* [Q](https://github.com/kriskowal/q)
* [underscore.js](http://underscorejs.org/) - Used only for the [isEqual](http://underscorejs.org/#isEqual) function

## Examples

`TODO`

## Change log

### 0.0.12 2016 05 31

* Fixed a bug in Factory.createObjectFromState. It was not reconstituting correctly Dates and Regular Expressions.
* Fixed a typo in package.json main field.
* Minor README.md updates

### 0.0.11 2016 05 25

* **Breaking Change** PersistableObject.TypeRegistry is now "not" exposed as it is used only by PersistableObject.Factory. 
* **Breaking Change** Added dependency to "underscore" to gain deep compare functionality. Null values are no more a problem!
    Remeber to add underscore to the scripts.

### 0.0.10 2016 05 25

* Added support for serialization/deserialization of null values
* Some exception were not exposed in RepositoryAsync queries.

### 0.0.9 2016 05 24

* Fixed BUG in Serialization of RegExp

### 0.0.8 2016 05 20

* Added IQueryAsync in Query namespace Query

### 0.0.7 2016 05 18

* Added this changelog!
* Added typings support in package.json
* Removed /// reference from ddd-tools.d.ts
* New tests for the InMemoryRepositoryAsync
* **Breaking Change!** - Renamed BaseInMemoryRepository to InMemoryRepository, no more abstract.
