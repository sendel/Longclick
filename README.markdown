jQuery *Long Click* Event
=========================
*Press & hold mouse/touch "long click" special event for [jQuery 1.4.x][jquery]*.
Inspired by similar events on touch-sensitive devices.


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


Fair Warning:
-------------

**Under intensive loving development**. v0.x works just fine, but is very "fluid" API-wise.
Till v1.0.

---
[Original page] https://github.com/pisi/Longclick [pisi]: http://petr.vostrel.cz/
