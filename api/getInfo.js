// 这是一个无服务器函数，部署后会在云端运行
// 每次调用都会执行这里的代码，返回动态内容

export default function handler(request, response) {
  // 这里可以是任何动态逻辑
  // 例如：读取数据库、随机内容、时间、调用其他API等

  const dynamicMessage = `
    你好！这是实时生成的内容。<br>
    当前服务器时间：<strong>${new Date().toLocaleString()}</strong><br>
    这是一个无服务器函数，即使你的电脑关机也能运行！
  `;

  // 返回JSON格式的数据
  response.status(200).json({
    message: dynamicMessage,
    timestamp: Date.now(),
    status: "success"
  });
}
