import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CodeEditorConsole = ({ customInput, setCustomInput }) => {
  return (
    <div className='h-[100px]'>
      <Tabs>
        <TabList className='bg-slate-800 text-white'>
          <Tab>Input</Tab>
          <Tab>Output</Tab>
        </TabList>
        <TabPanel>
          <textarea
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className='w-full outline-none'
          ></textarea>
        </TabPanel>
        <TabPanel>
          <textarea className='w-full outline-none'></textarea>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CodeEditorConsole;
