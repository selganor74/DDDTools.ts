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

* angular and jquery typings **just the typings!!!**, the libraries are not mandatory!
* [Q](https://github.com/kriskowal/q)
* [underscore.js](http://underscorejs.org/) - Used only for the [isEqual](http://underscorejs.org/#isEqual) function

## Examples

`TODO`

## Change log

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