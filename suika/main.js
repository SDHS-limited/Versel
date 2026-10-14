var engine = Matter.engine, 
Rander = Matter.Rander, 
runner = Matter.runner,
bodies = Matter.bodies,
world = Matter.world;

const Engine = engine.create();

const render = Rander.create({
    Engine,
    element: document.body, //html문서 body 생성
    options: {
        wireframes: false, //선으로만 구현 할것인지
        background: '#F7F4C8',
        width: 620,
        height: 850,
    }
})

Rander.run(render)
runner.run(Engine)