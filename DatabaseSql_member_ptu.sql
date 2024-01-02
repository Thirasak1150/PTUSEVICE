-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2024 at 02:09 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `member_ptu`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `carid` int(10) NOT NULL,
  `bandcar` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `details` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`carid`, `bandcar`, `status`, `username`, `details`) VALUES
(14, 'Toyota', 'NOCARSERVICE', 'customer', 'ปี 2020');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id_member` int(100) NOT NULL,
  `fname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `surname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tel_member` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `assess_right` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='1';

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id_member`, `fname`, `surname`, `username`, `password`, `tel_member`, `assess_right`) VALUES
(2, 'admin\r\n', 'adminja', 'admin', 'admin', '0813484843434', 'admin'),
(5, 'employee', 'employeeja', 'employee', 'employee', '0814288559', 'customer'),
(6, 'Thirasak', 'Arreeram', 'customer', 'customertest', '07932138449', 'customer'),
(7, 'pudachaprojext', 'pudachartest', 'pudachaprojext', 'pudachaprojext', '081234456678', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `reservetion`
--

CREATE TABLE `reservetion` (
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `date` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `reservetionid` int(11) NOT NULL,
  `detail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `carid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tel` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservetion`
--

INSERT INTO `reservetion` (`name`, `date`, `time`, `username`, `reservetionid`, `detail`, `carid`, `tel`) VALUES
('ถ่ายน้ำมันเครื่องของเหลวต่างๆ', '2023-12-14', '14:50', 'customer', 19, 'ถ่ายน้ำมัน', '', '089212313'),
('ตรวจเช็คสภาพ', '2023-12-16', '12:06', 'customer', 20, 'จอง', '', '089212313');

-- --------------------------------------------------------

--
-- Table structure for table `sevice`
--

CREATE TABLE `sevice` (
  `serviceid` int(11) NOT NULL,
  `usernamecustomer` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `employeeid` int(50) NOT NULL,
  `date` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `servicename` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `carpartid` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `detail` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `distance` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `carid` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `statusservice` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sevice`
--

INSERT INTO `sevice` (`serviceid`, `usernamecustomer`, `employeeid`, `date`, `servicename`, `carpartid`, `quantity`, `detail`, `distance`, `time`, `carid`, `statusservice`) VALUES
(31, 'customer', 5, '16/11/2023', 'ล้างทำความสะอาดภายนอกเเละภายใน', '4', 5, 'testน้ำมัน', 'ๅ/จ', '11:40', '12', 'เสร็จเเล้ว'),
(33, 'customer', 5, '16/11/2023', 'ตรวจเช็คสภาพ', '5', 5, 'test', '500', '11:45', '12', 'เสร็จเเล้ว');

-- --------------------------------------------------------

--
-- Table structure for table `stok_carparts`
--

CREATE TABLE `stok_carparts` (
  `namecarpart` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `carpartid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stok_carparts`
--

INSERT INTO `stok_carparts` (`namecarpart`, `carpartid`, `quantity`) VALUES
('น้ำมันเกียร์', 4, 20),
('น้ำมัน', 5, 44),
('ยางรถ', 10, 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`carid`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id_member`);

--
-- Indexes for table `reservetion`
--
ALTER TABLE `reservetion`
  ADD PRIMARY KEY (`reservetionid`);

--
-- Indexes for table `sevice`
--
ALTER TABLE `sevice`
  ADD PRIMARY KEY (`serviceid`);

--
-- Indexes for table `stok_carparts`
--
ALTER TABLE `stok_carparts`
  ADD PRIMARY KEY (`carpartid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `carid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id_member` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reservetion`
--
ALTER TABLE `reservetion`
  MODIFY `reservetionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `sevice`
--
ALTER TABLE `sevice`
  MODIFY `serviceid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `stok_carparts`
--
ALTER TABLE `stok_carparts`
  MODIFY `carpartid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
