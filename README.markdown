jQuery *Long Click* Event
=========================
*Press & hold mouse/touch "long click" special event for [jQuery 1.4.x][jquery]*.
Inspired by similar events on touch-sensitive devices.

Library amended by Pascal GANAYE mainly to handle jQuery up to 2.1.0.
[Original page] https://github.com/pisi/Longclick


Using *Long Click*:
-------------------

### `.longclick([ handler ], [ duration ])`
* If supplied, optional custom `duration` is used for target element(s).
* This method is a shortcut for `.trigger("longclick")` if called without arguments.
* Returns *[jQuery][jquery-jquery]*.


Parameter `duration`:
---------------------

* For how long (in milliseconds) mouse button must be pressed down (or touched) stationery to qualify as a *long click*.
* False value results in using the configured default.
* Default `duration` is **500** and is stored in `jQuery.longclick.duration` variable.


Event `"longclick"`:
--------------------

* Works with standard [`live`][jquery-live], [`bind`][jquery-bind], [`unbind`][jquery-unbind] and [`trigger`][jquery-trigger] event methods as one would expect.


Requirements:
-------------

1. Mighty [jQuery 1.4.x][jquery]:

    `<script src='http://code.jquery.com/jquery-latest.min.js' type='text/javascript'></script>`

2. and **[`jquery.longclick-min.js` (~1 kB)][download-min]**:

    `<script src='jquery.longclick-min.js' type='text/javascript'></script>`


License:
--------

Free for use in all personal or commercial projects under both [MIT][license-mit] and [GPL][license-gpl] licenses.


Recent History:
-------
### 13-Oct-2014 : Support for JQuery 2.1.0
Removed the $.click(duration, function) that conflicts with `$.click( [eventData ], handler )` add in JQuery 1.4.3.
Inverted the parameters of `.longclick([ handler ], [ duration ])`. 
I felt at the time that it was more in line with regular Javascript constructs like `setTimeOut(function, interval)`.
Looking at the jQuery effects like `.fadeIn( [duration ] [, complete ] ), I am not really sure whether it was a good idea anymore.

---

