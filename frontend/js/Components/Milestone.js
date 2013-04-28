/**
 * Milestone Mudule
 */
define([
  'app',
  'backbone',
  'underscore',

  'Components/Raphael/Connection'

], function(App, Backbone, _) {
  var Milestone = function(options) {
    this.options = options;

    var milestoune = this;
    var paper = this.options.paper;
    var connections = this.options.mindmap.connections;

    this.dragger = function () {
      milestoune.elems.forEach(function(elem) {
        elem.ox = elem.type == "ellipse" ? elem.attr("cx") : elem.attr("x");
        elem.oy = elem.type == "ellipse" ? elem.attr("cy") : elem.attr("y");
      });

      this.animate({"fill-opacity": .6}, 500);
    };

    this.move = function (dx, dy, x, y, e) {
      milestoune.elems.forEach(function(elem) {
        if (elem.type == "ellipse") {
          var att = {cx: elem.ox + dx, cy: elem.oy + dy};
        } else {
          var att = {x: elem.ox + dx, y: elem.oy + dy};
        }
                                           
        elem.attr(att);
      });

      for (var i = connections.length; i--;) {
        paper.connection(connections[i]);
      }

      paper.safari();
    };

    this.up = function () {
      this.animate({"fill-opacity": 1}, 500);
    }
  };

  Milestone.prototype = {

    /**
     * Render milestine
     * @return {Object}
     */
    render: function() {
      var paper = this.options.paper;

      var block = paper.rect(0, 0, 230, 50, 10).attr({
        "fill": "#2ECC71",
        "fill-opacity": 1,
        "stroke-width": 0,
        "cursor": "move"
      });
      var secondTitle = paper.text(110, 19, "Milestone").attr({
        font: '17px Arial',
        fill: "#fff"
      });
      var title = paper.text(108, 37, "22 September 2008").attr({
        font: '10px Arial',
        fill: "#fff"
      });

      this.elems = [title, secondTitle, block];

      label = paper.set.apply(this, this.elems);
      label.drag(this.move, this.dragger, this.up);

      return block;
    }

  };

  _.extend(Milestone.prototype, Backbone.Events);

  return Milestone;
});
