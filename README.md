typescript ddd tools
====================

(https://git.loccioni.com/IT/ddd-tools)

A typescript implementation of the basic DDD patterns.

## What is in it?

The package exports a DDDTools "namespace" composed by the following elements

### Main Patterns

* **ValueObject**
* **Entity**
* **Aggregate** 
* **Repository**
* **UnitOfWork**
* **DomainEvents**

### Tools and utilities

* **Serialization**: "Smart" Serialization/Deserialization able to serialize and
  reconstitute object trees and "special types" such as Date and RegExp.
  It can be used "as a stand alone" tool.
  
* **PersistableObject**: Manages "evolution" of objects that can be persisted. 
  Objects whose state can survive between program "executions" must provide a 
  mean of "upgrading" their state, to follow changes due to requirements change 
  and/or bugs. 
  
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

* angular and jquery typings **just the typings!!!**, the libraries are not mandatory!
* [Q](https://github.com/kriskowal/q)
* [underscore.js](http://underscorejs.org/) - Used only for the [isEqual](http://underscorejs.org/#isEqual) function

## Examples

`TODO`

## Change log

### 1.0.1 2017 06 28

* Serializer now uses GUIDs as __objectIdReference tag to identify the same instance of an object in an object tree. This allows "manual" copy of objects from an aggregate to another. (ref. S.Silvestrini). Serializer performance is strangely not impacted in speed, but obviously size overhead increased.
* Fixed some typos in README.md
* Added Serialize/Deserialize performance test on a big object coming from app-easyoff.
* Fixed some Serializer test spec.

Performance tests are actually returning these values on an i7-6820HQ (8 cores) @ 2.70 GHz
```
bigObject stringify size: 89676
serialized string size: 132316
size Overhead: 42640
size Overhead Percent: 48 %
Average Time to serialize: 7.25 ms
Average Time to deserialize: 31.68 ms
Average Time to roundtrip: 38.93 ms
Average Deserialization to Serialization Percent: 437 %
Average Serialization to Deserialization Ratio: 1:4.37
Average pure JSON.stringify time: 0.8 ms
Average pure JSON.parse time: 1.13 ms
Average pure JSON.parse/JSON.stringify roundtrip time: 1.93 ms
Average pure JSON parse/stringify Ratio: 1:1.41
Serialization overhead over pure JSON.stringify percent: 908 %
Deserialization overhead over pure JSON.parse percent: 2811 %
Roundtrip overhead over pure JOSN.stringify/JSON.parse percent: 2022 %
NOTE: average calculated over 100 Serialization/Deserialization cycles

bigObject stringify size: 10407776
serialized string size: 10926208
size Overhead: 518432
size Overhead Percent: 5 %
Average Time to serialize: 1091.39 ms
Average Time to deserialize: 3873.86 ms
Average Time to roundtrip: 4965.25 ms
Average Deserialization to Serialization Percent: 355 %
Average Serialization to Deserialization Ratio: 1:3.55
Average pure JSON.stringify time: 102.07 ms
Average pure JSON.parse time: 105.66 ms
Average pure JSON.parse/JSON.stringify roundtrip time: 207.73 ms
Average pure JSON parse/stringify Ratio: 1:1.04
Serialization overhead over pure JSON.stringify percent: 1069 %
Deserialization overhead over pure JSON.parse percent: 3666 %
Roundtrip overhead over pure JOSN.stringify/JSON.parse percent: 2390 %
NOTE: average calculated over 10 Serialization/Deserialization cycles
```

### 1.0.0 2017 06 06

* **BREAKING CHANGE** Fixed Array Instance reconstitution! Previos behavior was not to correctly reconstitute array instances, so the same array referenced by two variables was "duplicated" (one new instance per reference) during the serialization/deserialization process.
* **POTENTIALLY BREAKING CHANGE** revisionId steps from 0 to 1 at first save.
* **POTENTIALLY BREAKING CHANGE** restored (when did it disappear?) check on saving of stale objects.
* Moved to typescript 2.2
* Fixed some typos in README.md
* Linked README.md as "Solution Item"
* Added some performance tests to spot Serialization/Deserialization Bottlnecks.

Performance tests are actually returning these values on an i7-6820HQ (8 cores) @ 2.70 GHz
```
log: bigObject stringify size: 89676
log: serialized string size: 115043
log: size Overhead: 25367
log: size Overhead Percent: 28 %
log: Average Time to serialize: 4.45 ms
log: Average Time to deserialize: 30.13 ms
log: Average Deserialization to Serialization Percent: 677 %
log: Average Serialization to Deserialization Ratio: 1:6.77
log: Average pure JSON.stringify time: 0.79 ms
log: Average pure JSON.parse time: 0.97 ms
log: Average pure JSON parse/stringify Ratio: 1:1.23
log: Serialization overhead over pure JSON.stringify percent: 566 %
log: Deserialization overhead over pure JSON.parse percent: 3118 %

log: NOTE: average calculated over 100 Serialization/Deserialization cycles
```


### 0.0.26 2016 10 27

* Removed some console.log from BaseRepositoryAsync, to avoid cluttering console output in production environment
* Restored README.md in published npm 

### 0.0.25 2016 10 19

* Added StateMachineDefinitionRegistry. Allows to "change" the stateMachineDefinitions, without the need of an upgrade process of the state machine.
* Added the README.md as linked existing item in visual studio. Still don't know if it is the right choice as Visual Studio seems to store an absolut path to the file. 

### 0.0.24 2016 10 18

* Added "Money" Value Object to handle Money values.
* Added "IReadModel" Interface. Implementations are left to implementation modules.

### 0.0.23 2016 09 10

* Fixed some bugs in BaseStateMachine. Added tests to check for correct serialization and store in repositories.

### 0.0.22 2016 08 19

* Added Serializer.serializeToObject and Deserializer.deserializeFromObject.
* Refinements of the BaseStateMachine. It now supports handler on before and after status enter and exit, plus an handler on succesful event processing.

### 0.0.21 2016 07 14

* **Breaking Change** Added "Promises" namespace into which have been moved the Repository.PromiseHandler et al. management.
* Added StateMachine and Saga prototypes... still nothing to rely on!
* The generated ddd-tools.d.ts is now keeping comments! 
* EventHandlers now can return promises. InProcessDispatcher.dispatch will return a promise, that will be resolved when all handlers have completed processing.
* DomainDispatcher.dispatch, now always return a promise, so clients can write their own "then" functions even if there's no IDispatcher implementation set.
* DomainDispatcher.dispatch must always resolve (and not reject) the returned promise. Events rejections are logged but don't affect clients.
* In BaseRepositoryAsync promises will be fulfilled only when event processing have been completed (right or wrong).

### 0.0.20 2016 06 27

* DomainEvents.dispatch now returns a promise. Useful especially during testing to know when event processing has completely done.
* Added repositoryId parameter to BaseInMemoryRepositoryAsync.

### 0.0.19 2016 06 27

* Bug Fix: It is now possible to re-register the same handler in a different instance of the InProcessDispatcher.
* Added findInArray function to BaseValueObject.

### 0.0.18 2016 06 24

* Added scope parameter to DomainEvents.registerHandler to allow passing "original" context along with handler.
* Fixed Factory.registerType signature to allow registering elements having a constructor with parameters.

### 0.0.17 2016 06 20

* **Possibly Breaking Change** Fix of return types in BaseRepositoryAsync, should be PromiseHandler.IPromise, instead of Q.IPromise.
* **Possibly Breaking Change** Fix of return types in IRepositoryAsync, should be PromiseHandler.IPromise, instead of Q.IPromise.
* **Possibly Breaking Change** Fix of return types in IQueryAsync, should be PromiseHandler.IPromise, instead of Q.IPromise.

### 0.0.16 2016 06 16

* Added repositoryId property to BaseRepository* and RepositoryEvents. This allows to "discern" events by destination.
* Repository Events are now generic on the AggregateType, and have a unique "item" property of the type managed by the Repository type.
* BugFix: BaseEntity.raiseEvent converted from private to protected to allow access to derivatives. 
* **Breaking Change** Added setQuery method to IQuery* interfaces.

### 0.0.15 2016 06 16

* saveImplementation methods in BaseRepository and BaseRepositoryAsync now receive a SaveActionEnum parameter to tell wheter the item must be created or updated.
  In this way implementation that needs to know if an item exists or not are nto forced to make a new query.

### 0.0.14 2016 06 13

* **Breaking Change** To avoid [this](http://stackoverflow.com/questions/33965435/testing-angular-when-mixing-q-and-es6-promises) issue during testing, ddd-tools now tries to use $q instead of Q if angular1.x is available. Feature needs to be deeply tested!
  Angular is now a dev dependency of ddd-tools, and now we are rturning ng.IPromise from async calls, becaus $q is the thinnest interface.
  The Repository namespace now contains a PromiseHandler which will contain Q or $q as needed.
  Development with the library will be possible **if and only if angular and jquery typings are available**.
* Added "replace" method to repositories interfaces. The replace method makes possible to save an item without incrementing its revisionId.
* Added ItemReplacedEvent. Repositories will fire this event if an item is "replaced" (not added) with the "replace" method.
  If item is not existent when calling "replace", an ItemAddedEvent will be fired.

### 0.0.13 2016 06 10

* RevisionId is not incremented if elment is not already in the repo. So Saving a newly created item will leave RevisionId = 0.

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