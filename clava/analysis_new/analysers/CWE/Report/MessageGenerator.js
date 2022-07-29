laraImport("lara.Io");
laraImport("clava.analysis_new.analysers.CWE.Report.Weakness");

class MessageGenerator {
    static messages = [];



    static append(checkpoint) {
        if (checkpoint === undefined) {
            return;
        }
        var message = ""
        message += "\n vulnerability detected : " + checkpoint.getDesc() + " \n line : " + checkpoint.getLine() + "\n data name : " + checkpoint.getName() + "\n";
        println(message)
        this.messages.push(message)
    }

    static generateReport(fileName) {
        var analysisFileName = Io.getPath(Clava.getData().getContextFolder(), "AnalysisReports/analysis_" + fileName + "_report.txt");
        var message = ""
        for (const $message of this.messages) {
            message += $message

        }
        Io.writeFile(analysisFileName, message);
        this.messages = []
    }
}
