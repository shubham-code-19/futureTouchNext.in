"use client";
import React, { useEffect, useRef } from "react";
import * as Matter from "matter-js";

const Heromatterjs = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    let engine, render, mouseConstraint;

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } =
      Matter;

    engine = Engine.create();
    render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth - 100,
        height: window.innerWidth <= 768 ? 300 : 360,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    if (!sceneRef.current) return;

    render.canvas.classList.add("interactive-canvas");

    // Boundaries
    const ground = Bodies.rectangle(
      render.options.width / 2,
      render.options.height,
      render.options.width,
      30,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const leftWall = Bodies.rectangle(0, render.options.height / 2, 30, render.options.height, {
      isStatic: true, render: { fillStyle: "transparent" }
    });
    const rightWall = Bodies.rectangle(render.options.width, render.options.height / 2, 30, render.options.height, {
      isStatic: true, render: { fillStyle: "transparent" }
    });

    World.add(engine.world, [ground, leftWall, rightWall]);

    // Mouse control ✅
    const mouse = Mouse.create(render.canvas);
    mouse.pixelRatio = window.devicePixelRatio;
    mouse.offset = { x: 0, y: 0 };

    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Debugging drag
    Events.on(mouseConstraint, "startdrag", (event) => {
      console.log("Dragging started:", event.body);
    });

    Events.on(mouseConstraint, "mousemove", (event) => {
      console.log("Mouse moving:", event.mouse.position);
    });

    // Add text bodies ✅
    const skills = [
      'Machine Learning',
              'React.js Development',
              'PHP Laravel',
              'Digital Marketing',
              'Shopify Development',
              'E-commerce Development',
              'Node Js Development',
              'Artificial Intelligence',
              'Backend Development',
              'Frontend Development',
              'Data Science',
              'Web Development',
              'Mobile App Development',
      
              'DevOps',
    ];

    const textBodies = skills.map((text, i) => {
      const bodyWidth = Math.max(text.length * 12, 150);
      return Bodies.rectangle(200 + i * 80, 50 + i * 60, bodyWidth, 50, {
        chamfer: { radius: 15 },
        render: {
          fillStyle: "#fff",
          strokeStyle: "#32ccaa",
          lineWidth: 2,
          text: { content: text, size: 16, color: "#5f45f9" },
        },
        restitution: 0.6,
        friction: 0.2,
      });
    });

    World.add(engine.world, textBodies);

    // Draw text after render ✅
    Events.on(render, "afterRender", () => {
      textBodies.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const { content, size, color } = body.render.text;

        render.context.save();
        render.context.translate(x, y);
        render.context.rotate(angle);
        render.context.font = `bold ${size}px Inter, sans-serif`;
        render.context.textAlign = "center";
        render.context.textBaseline = "middle";
        render.context.fillStyle = color;
        render.context.fillText(content, 0, 0);
        render.context.restore();
      });
    });

    Engine.run(engine);
    Render.run(render);

    // Handle Resize ✅
    const handleResize = () => {
      if (!render) return;
      render.canvas.width = window.innerWidth - 100;
      render.canvas.height = window.innerWidth <= 768 ? 300 : 360;

      if (render.mouse) {
        render.mouse.pixelRatio = window.devicePixelRatio;
        render.mouse.offset = { x: 0, y: 0 };
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="mt-5 px-10 max-md:hidden choose-background ">
      <div className="content text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5 mb-3 font-bold my-5">
          <span
            className=" text-4xl bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest "
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Grow Your Business <br />
          </span>
          With Our
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text ml-2">
            Expertise
          </span>
        </h3>
      </div>

      <div className="service-matter px-4 py-4" ref={sceneRef}></div>
    </div>
  );
};

export default Heromatterjs;
