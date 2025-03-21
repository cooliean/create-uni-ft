import { Command } from 'commander';
import { input } from '@inquirer/prompts';

export const getCommand = async (templateName?: string) => {
  const program = new Command();
  const defaultTemplateName = templateName || 'my-v3-uni-project';
  // 获取命令行的参数, 根据参数执行不同的逻辑

  const opts = program
    .name('uni-ft')
    .description('创建项目')
    .argument('[project-name]', '项目名称')
    .helpOption('-h, --help', '查看帮助')
    .option('-n, --name <name>', '项目名称')
    .opts()

  program.parse()

  let projectName = program.args[0] ? program.args[0] : opts.name || ''

  // 如果命令行没有项目名，就输入项目名称
  while (!projectName) {
    projectName = await input({ message: '请输入项目名', default: defaultTemplateName });
  }

  return projectName

}
