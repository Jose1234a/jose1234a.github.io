-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2023 a las 22:44:55
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `contrasena` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contrasena`) VALUES
(1, 'NIKOL', 'nikol1236'),
(2, 'FELIPE RAMIREZ', 'felipe1512'),
(3, 'CARLOS', 'carlos2253'),
(4, 'LEIDY', 'leidy7891'),
(5, 'FELIPE VARGAS', 'felipe9518'),
(6, 'AMELIA', 'amelia7532'),
(7, 'ALEJANDRA', 'alejandra1236'),
(8, 'PATRICIA', 'patricia4569'),
(9, 'PINEDA', 'pineda8521'),
(10, 'MAURICIO', 'mauricio6547'),
(11, 'SANTIAGO', 'santiago9632'),
(12, 'EDILBERTO', 'edilberto7412'),
(13, 'OLGA ', 'olga7530'),
(14, 'JAVIER', 'javier8639'),
(15, 'CAICEDO', 'caicedo5589'),
(16, 'RUBIEL', 'rubiel4625'),
(17, 'OSCAR IVAN', 'oscar8826'),
(18, 'ANA', 'ana1025'),
(19, 'JUAN CARLOS', 'juanca853'),
(20, 'JOSE', 'jose7883'),
(21, 'FREDI TRUJILLO', 'fredi0102');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
