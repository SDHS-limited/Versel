var Engine = Matter.Engine, 
    Render = Matter.Render, 
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

const engine = Engine.create();

const world = engine.world;

const leftwall = Bodies.rectangle(15, 395, 30, 790,{
    isStatic : true,
    render: {fillStyle: '#E6B143'}
});

const render = Render.create({
    engine,
    element: document.body, //html문서 body 생성
    options: {
        wireframes: false, //선으로만 구현 할것인지
        background: '#F7F4C8',
        width: 620,
        height: 850,
    }
})

World.add(world, [leftwall])

Render.run(render)
Runner.run(engine)