import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CodeEditorConsole = () => {
  return (
    <div>
      <Tabs>
        <TabList className='bg-slate-800 text-white'>
          <Tab>Input</Tab>
          <Tab>Output</Tab>
        </TabList>
        <TabPanel>
          <textarea className='w-full outline-none' rows={5}></textarea>
        </TabPanel>
        <TabPanel>
          <textarea className='w-full outline-none' rows={5}></textarea>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CodeEditorConsole;
