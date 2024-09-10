# 使用 Node.js 官方镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目代码到容器中
COPY . .

# 暴露容器端口
EXPOSE 3000

# 运行启动命令
CMD ["npm", "start"]