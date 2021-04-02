#!/bin/bash

#SBATCH --job-name=a1g9
#SBATCH --mem=96000
#SBATCH --cpus-per-task=48
##SBATCH --hint=compute_bound
#SBATCH --mail-user=guilherme.araujo@imd.ufrn.br
#SBATCH --mail-type=ALL
#SBATCH --time=2-0:0

#module load softwares/python/3.6-anaconda-5.0.1
#module load compilers/gnu/7.3

#argument parsing
for i in "$@"
do
case $i in
    -betaA=*|--extension=*)
    BETA_A="${i#*=}"
    shift # past argument=value
    ;;
    -betaB=*|--searchpath=*)
    BETA_B="${i#*=}"
    shift # past argument=value
    ;;
    -ephTime=*|--lib=*)
    EPHTIME="${i#*=}"
    shift # past argument=value
    ;;
    -threads=*|--lib=*)
    THREADNUM="${i#*=}"
    shift # past argument=value
    ;;
    *)
          # unknown option
    ;;
esac
done
echo "BETA A  = ${BETA_A}"
echo "BETA B  = ${BETA_B}"
echo "EPHTIME = ${EPHTIME}"
echo "THREADNUM = ${THREADNUM}"
if [[ -n $1 ]]; then
    echo "Last line of file specified as non-opt/last argument:"
    tail -1 $1
fi

FILE=gsop

if [ -f "$FILE" ]; then

	echo "$FILE exists"

	touch job-over.txt
	echo "scale=2; 0/10" | bc > job-percent.txt
	for i in $(seq 1 10);
	do
		python3 main.py --operation=newGraph --graphtype=ba --numNodes=200 --numEdges=4
		./$FILE samples 50 ephBonus 0.01 ephBonusB 0.09 ephStartRatio 0.6 ephBuildingRatio 0.6666 ephReusingRatio 0.1666 ephPopHistory 0 threads $THREADNUM cycles 5000 ephTime $EPHTIME ni 0 sampleId $i printPartials 1 rBMA 9 rBMB 0.1111 bBA $BETA_A bBB $BETA_B >> a1g9.txt
		echo "scale=2; $i/10" | bc > job-percent.txt
	done

	echo 1 > job-over.txt

else
    echo "$FILE not found."
fi
