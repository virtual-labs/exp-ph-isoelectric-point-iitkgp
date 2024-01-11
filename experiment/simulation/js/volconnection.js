jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                var id = el.getAttribute("id");
                instance.animate(el, { left: l, top: t }, { duration: 350, easing: 'easeOutBack' });
            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        //--------for positive voltage connections--------//
        /*  endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 5, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
 */

        //--------for negative voltage connections--------//
        endpointblack = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 2, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 1,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare_negv = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpointblack);
        },

       
        


        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "./images/posdot.png" }],
        Connector: ["Bezier", { curviness: -40 }],
        Container: "canvas"
    });


    /*  instance1 = jsPlumb.getInstance({
         DragOptions: { cursor: 'wait', zIndex: 20 },
         Endpoint: [ "Image", { url: "./images/posedot.png" } ],
         Connector: [ "Bezier", { curviness: -40 } ],
         Container: "canvas"
     });  */


    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare_negv("ld1"), // negative in case

            e2 = prepare_negv("ld2"); // positive in case
         


        instance.connect({ source: e1, target: e2 });
        // instance.connect({ source: e2, target: e4 });


        
    });




    jsPlumb.fire("jsPlumbDemoLoaded", instance);
    //jsPlumb.fire("jsPlumbDemoLoaded", instance1);

    window.onload= function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());


        var correct_connections_1_2 = [
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld1"
            }
        ];
        
      

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld2"
            },

            {
                "source": "ld2",
                "target": "ld1"
            },


        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_2 = false;
        

        var unallowed_connection_present = false;
        var count = 0; // counts number of connection

        //checking for 1_3 connection
        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_2) {
                is_connected_1_2 = correct_connections_1_2.find(function (connection) {
                    return connection.source === this_connection.source && connection.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (connection) {
                    return (connection.source === this_connection.source && connection.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });
       
   
      
      






        if (((is_connected_1_2 )) && !unallowed_connection_present) {




           // alert("RIGHT CONNECTION.");
            //document.getElementById("samplerun").disabled = true;
        } else {
            $('#voltalertmessage').modal('show');
            $('.modal-body').text('Connection is wrong.');
            const canvas = document.getElementById('textvoltimer');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Set font properties
            ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family
          
            // Set text properties
            ctx.fillStyle = 'black'; // Text color
            ctx.textAlign = 'center'; // Text alignment (centered horizontally)
            ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
          
            // Define the text to be displayed
            const text = " ";
          
            // Get the position to place the text (in this case, centered on the canvas)
            const x = canvas.width / 2;
            const y = canvas.height / 2;
          
            // Draw the text on the canvas
            ctx.fillText(text, x, y);
                      return;
    
            return;
        }



    }


    document.getElementById('phmterpon').addEventListener('click', function () {
        // Delete all connections
        //instance.deleteEveryConnection();

        document.getElementById("viewsample").disabled=false;
        document.getElementById('agel1').setAttribute('onclick', "moveImage1()");;
        const canvas = document.getElementById('textvoltimer');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Set font properties
        ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family
      
        // Set text properties
        ctx.fillStyle = 'black'; // Text color
        ctx.textAlign = 'center'; // Text alignment (centered horizontally)
        ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
      
        // Define the text to be displayed
        const text = " ";
      
        // Get the position to place the text (in this case, centered on the canvas)
        const x = canvas.width / 2;
        const y = canvas.height / 2;
      
        // Draw the text on the canvas
        ctx.fillText(text, x, y);
                  return;


    });


});





