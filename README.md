## Simple mini-library that provides you to use pub/sub pattern.

### Example of usage:

####Subscribe to the event
```javascript
Mediator.sub('event:raise', function (e, data) {
    console.log(data.evt_dscr)
});
```

####Publish event
```javascript
Mediator.pub('event:raise', {evt_dscr:'Event was raised'});
```