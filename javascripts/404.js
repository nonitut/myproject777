document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на канвас и на контейнер с изображениями
    const canvas = document.querySelector("#canvas-target");
    const wrapper = document.querySelector(".positioning");
    // Получаем массив изображений в контейнере
    const svgElements = wrapper.querySelectorAll("img.a-image"); // Ваши изображения

    // Загрузка изображений
    let imagesLoaded = 0;
    const totalImages = svgElements.length;

    // Функция предзагрузки изображений
    function preloadImages() {
        svgElements.forEach((svg, index) => {
            const image = new Image();
            // Увеличиваем счетчик загруженных изображений
            image.onload = function() {
                imagesLoaded++;
                // После загрузки всех изображений создаем тела
                if (imagesLoaded === totalImages) {
                    createBodies();
                }
            };
            // Устанавливаем источник изображения для предзагрузки
            image.src = svg.src;
        });
    }

    // Функция создания тел объектов на основе изображений
    function createBodies() {
        // Подключаем модули Matter.js
        let Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // Создаем движок
        let engine = Engine.create();

        // Создаем рендерер
        let render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                background: "transparent",
                wireframes: false,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        });
        

        // Создаем тела объектов на основе изображений
        let bodies = [];
        svgElements.forEach((svg, index) => {
            let body = Bodies.rectangle(index * 100, 200, 100, 100, {
                render: {
                    sprite: {
                        texture: svg.src // Используем исходный URL изображения в качестве текстуры
                    }
                }
            });
            bodies.push(body);
        });
        Composite.add(engine.world, bodies);

        // Создаем "землю"
        let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 100, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
            }
        });
        Composite.add(engine.world, ground);

        // Добавляем стены
        let leftWall = Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
        let rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true });
        Composite.add(engine.world, [leftWall, rightWall]);

        // Запускаем рендерер
        Render.run(render);

        // Создаем и запускаем движок
        let runner = Runner.create();
        Runner.run(runner, engine);

        // Создаем ограничение мыши
        let mouse = Mouse.create(render.canvas);
        let mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        Composite.add(engine.world, mouseConstraint);

        // Обработка перетаскивания
        svgElements.forEach(svg => {
            svg.addEventListener("mousedown", function(event) {
                event.preventDefault();
                event.stopPropagation();
                const initialX = event.clientX;
                const initialY = event.clientY;

                function moveHandler(moveEvent) {
                    const movementX = moveEvent.clientX - initialX;
                    const movementY = moveEvent.clientY - initialY;
                    Composite.translate(engine.world, bodies, { x: movementX, y: movementY });
                }

                document.addEventListener("mousemove", moveHandler);

                document.addEventListener("mouseup", function() {
                    document.removeEventListener("mousemove", moveHandler);
                }, { once: true });
            });
        });
    }

    // Загрузка изображений перед созданием тел
    preloadImages();
});